add_executable(jshint jshint.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(jshint eightpack)
set_target_properties(jshint PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
