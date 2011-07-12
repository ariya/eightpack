add_subdirectory(v8)
add_library(eightpack STATIC eightpack.cpp)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/v8/include)
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/v8)
target_link_libraries(eightpack v8)

if(UNIX)
    target_link_libraries(eightpack pthread)
endif()

if(WIN32)
    target_link_libraries(eightpack ws2_32 winmm)
endif()

set_target_properties(eightpack PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})

if(MINGW)
    set_target_properties(eightpack PROPERTIES LINK_FLAGS "-static-libgcc -static-libstdc++")
endif()
