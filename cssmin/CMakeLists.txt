add_executable(cssmin cssmin.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(cssmin eightpack)
set_target_properties(cssmin PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
install(TARGETS cssmin DESTINATION bin)
