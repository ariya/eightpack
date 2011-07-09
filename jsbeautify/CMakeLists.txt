add_executable(jsbeautify jsbeautify.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(jsbeautify eightpack)
set_target_properties(jsbeautify PROPERTIES COMPILE_FLAGS ${EIGHTPACK_ARCH_FLAGS}
    LINK_FLAGS ${EIGHTPACK_ARCH_FLAGS})
install(TARGETS jsbeautify DESTINATION bin)
