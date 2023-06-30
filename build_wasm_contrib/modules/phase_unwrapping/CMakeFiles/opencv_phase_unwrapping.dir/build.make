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
include modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/depend.make

# Include the progress variables for this target.
include modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/progress.make

# Include the compile flags for this target's objects.
include modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/flags.make

modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o: modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/flags.make
modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o: modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/includes_CXX.rsp
modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o: ../opencv_contrib/modules/phase_unwrapping/src/histogramphaseunwrapping.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o"
	cd /src/build_wasm_contrib/modules/phase_unwrapping && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o -c /src/opencv_contrib/modules/phase_unwrapping/src/histogramphaseunwrapping.cpp

modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.i"
	cd /src/build_wasm_contrib/modules/phase_unwrapping && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/phase_unwrapping/src/histogramphaseunwrapping.cpp > CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.i

modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.s"
	cd /src/build_wasm_contrib/modules/phase_unwrapping && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/phase_unwrapping/src/histogramphaseunwrapping.cpp -o CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.s

# Object files for target opencv_phase_unwrapping
opencv_phase_unwrapping_OBJECTS = \
"CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o"

# External object files for target opencv_phase_unwrapping
opencv_phase_unwrapping_EXTERNAL_OBJECTS =

lib/libopencv_phase_unwrapping.a: modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/src/histogramphaseunwrapping.cpp.o
lib/libopencv_phase_unwrapping.a: modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/build.make
lib/libopencv_phase_unwrapping.a: modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX static library ../../lib/libopencv_phase_unwrapping.a"
	cd /src/build_wasm_contrib/modules/phase_unwrapping && $(CMAKE_COMMAND) -P CMakeFiles/opencv_phase_unwrapping.dir/cmake_clean_target.cmake
	cd /src/build_wasm_contrib/modules/phase_unwrapping && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/opencv_phase_unwrapping.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/build: lib/libopencv_phase_unwrapping.a

.PHONY : modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/build

modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/clean:
	cd /src/build_wasm_contrib/modules/phase_unwrapping && $(CMAKE_COMMAND) -P CMakeFiles/opencv_phase_unwrapping.dir/cmake_clean.cmake
.PHONY : modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/clean

modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/depend:
	cd /src/build_wasm_contrib && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /src /src/opencv_contrib/modules/phase_unwrapping /src/build_wasm_contrib /src/build_wasm_contrib/modules/phase_unwrapping /src/build_wasm_contrib/modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : modules/phase_unwrapping/CMakeFiles/opencv_phase_unwrapping.dir/depend
