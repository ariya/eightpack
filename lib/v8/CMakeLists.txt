include_directories(src)

set(V8_SOURCES
    src/accessors.cc
    src/allocation.cc
    src/api.cc
    src/assembler.cc
    src/ast.cc
    src/bignum-dtoa.cc
    src/bignum.cc
    src/bootstrapper.cc
    src/builtins.cc
    src/cached-powers.cc
    src/checks.cc
    src/circular-queue.cc
    src/code-stubs.cc
    src/codegen.cc
    src/compilation-cache.cc
    src/compiler.cc
    src/contexts.cc
    src/conversions.cc
    src/counters.cc
    src/cpu-profiler.cc
    src/data-flow.cc
    src/dateparser.cc
    src/debug-agent.cc
    src/debug.cc
    src/deoptimizer.cc
    src/disassembler.cc
    src/diy-fp.cc
    src/dtoa.cc
    src/execution.cc
    src/extensions/externalize-string-extension.cc
    src/extensions/gc-extension.cc
    src/factory.cc
    src/fast-dtoa.cc
    src/fixed-dtoa.cc
    src/flags.cc
    src/frame-element.cc
    src/frames.cc
    src/full-codegen.cc
    src/func-name-inferrer.cc
    src/gdb-jit.cc
    src/global-handles.cc
    src/handles.cc
    src/hashmap.cc
    src/heap-profiler.cc
    src/heap.cc
    src/hydrogen-instructions.cc
    src/hydrogen.cc
    src/ic.cc
    src/inspector.cc
    src/interpreter-irregexp.cc
    src/isolate.cc
    src/jsregexp.cc
    src/lithium-allocator.cc
    src/lithium.cc
    src/liveedit.cc
    src/liveobjectlist.cc
    src/log-utils.cc
    src/log.cc
    src/mark-compact.cc
    src/messages.cc
    src/objects-printer.cc
    src/objects-visiting.cc
    src/objects.cc
    src/parser.cc
    src/preparse-data.cc
    src/preparser.cc
    src/profile-generator.cc
    src/property.cc
    src/regexp-macro-assembler-irregexp.cc
    src/regexp-macro-assembler.cc
    src/regexp-stack.cc
    src/rewriter.cc
    src/runtime-profiler.cc
    src/runtime.cc
    src/safepoint-table.cc
    src/scanner-base.cc
    src/scanner.cc
    src/scopeinfo.cc
    src/scopes.cc
    src/serialize.cc
    src/snapshot-common.cc
    src/snapshot-empty.cc
    src/spaces.cc
    src/string-search.cc
    src/string-stream.cc
    src/strtod.cc
    src/stub-cache.cc
    src/token.cc
    src/top.cc
    src/type-info.cc
    src/unicode.cc
    src/utils.cc
    src/v8-counters.cc
    src/v8.cc
    src/v8threads.cc
    src/variables.cc
    src/version.cc
    src/zone.cc
)

# generated
set(V8_SOURCES ${V8_SOURCES} generated/libraries.cc)
set(V8_SOURCES ${V8_SOURCES} generated/experimental-libraries.cc)

include_directories(src/third_party/valgrind)

if(${EIGHTPACK_ARCH} MATCHES "x64")
    add_definitions(-DV8_TARGET_ARCH_X64)
    include_directories(src/x64)
    set(V8_SOURCES ${V8_SOURCES}
        src/x64/assembler-x64.cc
        src/x64/builtins-x64.cc
        src/x64/code-stubs-x64.cc
        src/x64/codegen-x64.cc
        src/x64/cpu-x64.cc
        src/x64/debug-x64.cc
        src/x64/deoptimizer-x64.cc
        src/x64/disasm-x64.cc
        src/x64/frames-x64.cc
        src/x64/full-codegen-x64.cc
        src/x64/ic-x64.cc
        src/x64/lithium-codegen-x64.cc
        src/x64/lithium-gap-resolver-x64.cc
        src/x64/lithium-x64.cc
        src/x64/macro-assembler-x64.cc
        src/x64/regexp-macro-assembler-x64.cc
        src/x64/stub-cache-x64.cc
    )
else()
    add_definitions(-DV8_TARGET_ARCH_IA32)
    include_directories(src/ia32)
    set(V8_SOURCES ${V8_SOURCES}
        src/ia32/assembler-ia32.cc
        src/ia32/builtins-ia32.cc
        src/ia32/code-stubs-ia32.cc
        src/ia32/codegen-ia32.cc
        src/ia32/cpu-ia32.cc
        src/ia32/debug-ia32.cc
        src/ia32/deoptimizer-ia32.cc
        src/ia32/disasm-ia32.cc
        src/ia32/frames-ia32.cc
        src/ia32/full-codegen-ia32.cc
        src/ia32/ic-ia32.cc
        src/ia32/lithium-codegen-ia32.cc
        src/ia32/lithium-gap-resolver-ia32.cc
        src/ia32/lithium-ia32.cc
        src/ia32/macro-assembler-ia32.cc
        src/ia32/regexp-macro-assembler-ia32.cc
        src/ia32/stub-cache-ia32.cc
    )
endif()

# platform-specific file
if(UNIX)
    set(V8_SOURCES ${V8_SOURCES} src/platform-posix.cc)
endif()

if(WIN32)
    set(V8_SOURCES ${V8_SOURCES} src/platform-win32.cc)
    add_definitions(-DWIN32)
endif()

if(${CMAKE_SYSTEM_NAME} MATCHES "Linux")
    set(V8_SOURCES ${V8_SOURCES} src/platform-linux.cc)
    add_definitions(-ansi)
endif()

if(${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    set(V8_SOURCES ${V8_SOURCES} src/platform-macos.cc)
    add_definitions(-ansi)
    add_definitions(-O3)
endif()

if(CMAKE_COMPILER_IS_GNUCXX)
    add_definitions(-Wall)
    add_definitions(-fno-rtti -fno-exceptions)
    set(V8_SOURCES ${V8_SOURCES} src/atomicops_internals_x86_gcc.cc)
    if(NOT MINGW)
        add_definitions(-fvisibility=hidden)
    endif()
    add_definitions(-Wno-uninitialized -fomit-frame-pointer -fdata-sections -ffunction-sections)
endif()

add_definitions(-DENABLE_VMSTATE_TRACKING)
add_definitions(-DENABLE_LOGGING_AND_PROFILING)
add_definitions(-DENABLE_DEBUGGER_SUPPORT)

add_library(v8 STATIC ${V8_SOURCES})

if(${EIGHTPACK_ARCH} MATCHES "x64")
    set_target_properties(v8 PROPERTIES COMPILE_FLAGS "-m64" LINK_FLAGS "-m64")
else()
    set_target_properties(v8 PROPERTIES COMPILE_FLAGS "-m32" LINK_FLAGS "-m32")
endif()
