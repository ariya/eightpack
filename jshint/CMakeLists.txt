add_executable(jshint jshint.cpp)
link_directories(${EIGHTPACK_PATH})
target_link_libraries(jshint eightpack)
set_target_properties(jshint PROPERTIES COMPILE_FLAGS ${EIGHTPACK_COMPILE_FLAGS})
set_target_properties(jshint PROPERTIES LINK_FLAGS ${EIGHTPACK_LINK_FLAGS})
install(TARGETS jshint DESTINATION bin)
