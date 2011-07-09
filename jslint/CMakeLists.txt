add_executable(jslint jslint.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(jslint eightpack)
set_target_properties(jslint PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
