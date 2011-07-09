/*
    Copyright (C) 2011 Ariya Hidayat.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

#include <v8.h>

#include <fstream>
#include <iostream>

#include <stdlib.h>

using namespace v8;

static Handle<Value> system_exit(const Arguments& args)
{
    HandleScope handle_scope;

    if (args.Length() != 0 && args.Length() != 1)
        return ThrowException(String::New("Exception: function system.exit() accepts 1 argument"));

    int status = (args.Length() == 1) ? args[0]->Int32Value() : 0;
    ::exit(status);

    return Undefined();
}

static Handle<Value> system_readFile(const Arguments& args)
{
    if (args.Length() != 1)
        return ThrowException(String::New("Exception: function system.readFile() accepts 1 argument"));

    String::Utf8Value name(args[0]);

    std::fstream *fs = new std::fstream;
    fs->open(*name, std::fstream::in);
    if (fs->fail() || fs->bad()) {
        delete fs;
        return ThrowException(String::New("Exception: Can't open the file"));
    }

    std::string buffer;
    std::string line;
    while (!fs->eof() && !fs->bad()) {
        std::getline(*fs, line);
        line.append("\n");
        buffer.append(line);
    }
    fs->close();
    delete fs;

    return String::New(buffer.c_str());
}

static Handle<Value> console_log(const Arguments& args)
{
    HandleScope handle_scope;

    for (int i = 0; i < args.Length(); i++) {
        String::Utf8Value value(args[i]);
        std::cout << *value;
        if (i < args.Length() - 1)
            std::cout << ' ';
    }
    std::cout << std::endl;

    return Undefined();
}

void eightpack_run(int argc, char* argv[], const char* cmd)
{
    V8::Initialize();

    HandleScope handle_scope;
    Handle<ObjectTemplate> global = ObjectTemplate::New();
    Handle<Context> context = Context::New(NULL, global);

    Context::Scope context_scope(context);

    Handle<Array> args = Array::New();
    for (int i = 1, index = 0; i < argc; ++i) {
        const char* arg = argv[i];
        args->Set(index, String::New(arg));
        ++index;
    }

    Handle<String> code = String::New(cmd);

    Handle<FunctionTemplate> systemObject = FunctionTemplate::New();
    systemObject->Set(String::New("args"), args);
    systemObject->Set(String::New("exit"), FunctionTemplate::New(system_exit)->GetFunction());
    systemObject->Set(String::New("readFile"), FunctionTemplate::New(system_readFile)->GetFunction());
    context->Global()->Set(String::New("system"), systemObject->GetFunction());

    Handle<FunctionTemplate> consoleObject = FunctionTemplate::New();
    consoleObject->Set(String::New("log"), FunctionTemplate::New(console_log)->GetFunction());
    context->Global()->Set(String::New("console"), consoleObject->GetFunction());

    Handle<Script> script = Script::Compile(code);
    if (script.IsEmpty()) {
        std::cerr << "Error: unable to bootstrap!" << std::endl;
    } else {
        script->Run();
    }
}
