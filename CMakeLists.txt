project(EightPack)
cmake_minimum_required(VERSION 2.6)

if(CMAKE_SIZEOF_VOID_P EQUAL 8)
    set(EIGHTPACK_ARCH "x64")
    set(EIGHTPACK_COMPILE_FLAGS "-m64")
    set(EIGHTPACK_LINK_FLAGS "-m64")
else()
    set(EIGHTPACK_ARCH "ia32")
    set(EIGHTPACK_COMPILE_FLAGS "-m32")
    set(EIGHTPACK_LINK_FLAGS "-m32")
endif()

# Target Mac OS X 10.5 so that it works both on Leopard and Snow Leopard.
if(${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    add_definitions(-mmacosx-version-min=10.5)
    set(CMAKE_MODULE_LINKER_FLAGS "${CMAKE_MODULE_LINKER_FLAGS} -mmacosx-version-min=10.5")
    set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} -mmacosx-version-min=10.5")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -mmacosx-version-min=10.5")
endif()

# Static linking to have no run-time dependency
if(MINGW)
    set(EIGHTPACK_LINK_FLAGS "${EIGHTPACK_LINK_FLAGS} -static-libgcc -static-libstdc++")
endif()

add_subdirectory(lib)
set(EIGHTPACK_PATH ${PROJECT_SOURCE_DIR}/lib)

add_subdirectory(jslint)
add_subdirectory(jshint)
add_subdirectory(jsbeautify)
add_subdirectory(jsmin)

add_subdirectory(cssbeautify)
add_subdirectory(cssmin)
