add_executable(cssbeautify cssbeautify.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(cssbeautify eightpack)
set_target_properties(cssbeautify PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
install(TARGETS cssbeautify DESTINATION bin)
