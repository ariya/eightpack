add_subdirectory(v8)
add_library(eightpack STATIC eightpack.cpp)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/v8/include)
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/v8)
target_link_libraries(eightpack v8)

if(UNIX)
    target_link_libraries(eightpack pthread)
endif()

set_target_properties(eightpack PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
