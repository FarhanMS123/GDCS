# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.13

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /src/build_wasm_contrib

# Include any dependencies generated for this target.
include modules/structured_light/CMakeFiles/opencv_structured_light.dir/depend.make

# Include the progress variables for this target.
include modules/structured_light/CMakeFiles/opencv_structured_light.dir/progress.make

# Include the compile flags for this target's objects.
include modules/structured_light/CMakeFiles/opencv_structured_light.dir/flags.make

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o: modules/structured_light/CMakeFiles/opencv_structured_light.dir/flags.make
modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o: modules/structured_light/CMakeFiles/opencv_structured_light.dir/includes_CXX.rsp
modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o: ../opencv_contrib/modules/structured_light/src/graycodepattern.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o -c /src/opencv_contrib/modules/structured_light/src/graycodepattern.cpp

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.i"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/structured_light/src/graycodepattern.cpp > CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.i

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.s"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/structured_light/src/graycodepattern.cpp -o CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.s

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o: modules/structured_light/CMakeFiles/opencv_structured_light.dir/flags.make
modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o: modules/structured_light/CMakeFiles/opencv_structured_light.dir/includes_CXX.rsp
modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o: ../opencv_contrib/modules/structured_light/src/sinusoidalpattern.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o -c /src/opencv_contrib/modules/structured_light/src/sinusoidalpattern.cpp

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.i"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/structured_light/src/sinusoidalpattern.cpp > CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.i

modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.s"
	cd /src/build_wasm_contrib/modules/structured_light && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/structured_light/src/sinusoidalpattern.cpp -o CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.s

# Object files for target opencv_structured_light
opencv_structured_light_OBJECTS = \
"CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o" \
"CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o"

# External object files for target opencv_structured_light
opencv_structured_light_EXTERNAL_OBJECTS =

lib/libopencv_structured_light.a: modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/graycodepattern.cpp.o
lib/libopencv_structured_light.a: modules/structured_light/CMakeFiles/opencv_structured_light.dir/src/sinusoidalpattern.cpp.o
lib/libopencv_structured_light.a: modules/structured_light/CMakeFiles/opencv_structured_light.dir/build.make
lib/libopencv_structured_light.a: modules/structured_light/CMakeFiles/opencv_structured_light.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking CXX static library ../../lib/libopencv_structured_light.a"
	cd /src/build_wasm_contrib/modules/structured_light && $(CMAKE_COMMAND) -P CMakeFiles/opencv_structured_light.dir/cmake_clean_target.cmake
	cd /src/build_wasm_contrib/modules/structured_light && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/opencv_structured_light.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
modules/structured_light/CMakeFiles/opencv_structured_light.dir/build: lib/libopencv_structured_light.a

.PHONY : modules/structured_light/CMakeFiles/opencv_structured_light.dir/build

modules/structured_light/CMakeFiles/opencv_structured_light.dir/clean:
	cd /src/build_wasm_contrib/modules/structured_light && $(CMAKE_COMMAND) -P CMakeFiles/opencv_structured_light.dir/cmake_clean.cmake
.PHONY : modules/structured_light/CMakeFiles/opencv_structured_light.dir/clean

modules/structured_light/CMakeFiles/opencv_structured_light.dir/depend:
	cd /src/build_wasm_contrib && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /src /src/opencv_contrib/modules/structured_light /src/build_wasm_contrib /src/build_wasm_contrib/modules/structured_light /src/build_wasm_contrib/modules/structured_light/CMakeFiles/opencv_structured_light.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : modules/structured_light/CMakeFiles/opencv_structured_light.dir/depend

