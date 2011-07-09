// Copyright 2011 Google Inc. All Rights Reserved.

// This file was generated from .js source files by SCons.  If you
// want to make changes to this file you should either change the
// javascript source files or the SConstruct script.

#include "v8.h"
#include "natives.h"

namespace v8 {
namespace internal {

  static const char proxy[] = { 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 103, 108, 111, 98, 97, 108, 46, 80, 114, 111, 120, 121, 61, 110, 101, 119, 32, 36, 79, 98, 106, 101, 99, 116, 40, 41, 59, 10, 10, 0 };

  template <>
  int NativesCollection<EXPERIMENTAL>::GetBuiltinsCount() {
    return 1;
  }

  template <>
  int NativesCollection<EXPERIMENTAL>::GetDebuggerCount() {
    return 0;
  }

  template <>
  int NativesCollection<EXPERIMENTAL>::GetIndex(const char* name) {
    if (strcmp(name, "proxy") == 0) return 0;
    return -1;
  }

  template <>
  Vector<const char> NativesCollection<EXPERIMENTAL>::GetScriptSource(int index) {
    if (index == 0) return Vector<const char>(proxy, 56);
    return Vector<const char>("", 0);
  }

  template <>
  Vector<const char> NativesCollection<EXPERIMENTAL>::GetScriptName(int index) {
    if (index == 0) return Vector<const char>("native proxy.js", 15);
    return Vector<const char>("", 0);
  }

}  // internal
}  // v8
