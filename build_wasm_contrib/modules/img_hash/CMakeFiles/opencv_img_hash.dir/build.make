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
include modules/img_hash/CMakeFiles/opencv_img_hash.dir/depend.make

# Include the progress variables for this target.
include modules/img_hash/CMakeFiles/opencv_img_hash.dir/progress.make

# Include the compile flags for this target's objects.
include modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o: ../opencv_contrib/modules/img_hash/src/average_hash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/average_hash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/average_hash.cpp > CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/average_hash.cpp -o CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o: ../opencv_contrib/modules/img_hash/src/block_mean_hash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/block_mean_hash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/block_mean_hash.cpp > CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/block_mean_hash.cpp -o CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o: ../opencv_contrib/modules/img_hash/src/color_moment_hash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/color_moment_hash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/color_moment_hash.cpp > CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/color_moment_hash.cpp -o CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o: ../opencv_contrib/modules/img_hash/src/img_hash_base.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o -c /src/opencv_contrib/modules/img_hash/src/img_hash_base.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/img_hash_base.cpp > CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/img_hash_base.cpp -o CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o: ../opencv_contrib/modules/img_hash/src/marr_hildreth_hash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/marr_hildreth_hash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/marr_hildreth_hash.cpp > CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/marr_hildreth_hash.cpp -o CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o: ../opencv_contrib/modules/img_hash/src/phash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/phash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/phash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/phash.cpp > CMakeFiles/opencv_img_hash.dir/src/phash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/phash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/phash.cpp -o CMakeFiles/opencv_img_hash.dir/src/phash.cpp.s

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/flags.make
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o: modules/img_hash/CMakeFiles/opencv_img_hash.dir/includes_CXX.rsp
modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o: ../opencv_contrib/modules/img_hash/src/radial_variance_hash.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o -c /src/opencv_contrib/modules/img_hash/src/radial_variance_hash.cpp

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.i"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /src/opencv_contrib/modules/img_hash/src/radial_variance_hash.cpp > CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.i

modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.s"
	cd /src/build_wasm_contrib/modules/img_hash && /emsdk/upstream/emscripten/em++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /src/opencv_contrib/modules/img_hash/src/radial_variance_hash.cpp -o CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.s

# Object files for target opencv_img_hash
opencv_img_hash_OBJECTS = \
"CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o" \
"CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o"

# External object files for target opencv_img_hash
opencv_img_hash_EXTERNAL_OBJECTS =

lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/average_hash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/block_mean_hash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/color_moment_hash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/img_hash_base.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/marr_hildreth_hash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/phash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/src/radial_variance_hash.cpp.o
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/build.make
lib/libopencv_img_hash.a: modules/img_hash/CMakeFiles/opencv_img_hash.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/src/build_wasm_contrib/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Linking CXX static library ../../lib/libopencv_img_hash.a"
	cd /src/build_wasm_contrib/modules/img_hash && $(CMAKE_COMMAND) -P CMakeFiles/opencv_img_hash.dir/cmake_clean_target.cmake
	cd /src/build_wasm_contrib/modules/img_hash && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/opencv_img_hash.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
modules/img_hash/CMakeFiles/opencv_img_hash.dir/build: lib/libopencv_img_hash.a

.PHONY : modules/img_hash/CMakeFiles/opencv_img_hash.dir/build

modules/img_hash/CMakeFiles/opencv_img_hash.dir/clean:
	cd /src/build_wasm_contrib/modules/img_hash && $(CMAKE_COMMAND) -P CMakeFiles/opencv_img_hash.dir/cmake_clean.cmake
.PHONY : modules/img_hash/CMakeFiles/opencv_img_hash.dir/clean

modules/img_hash/CMakeFiles/opencv_img_hash.dir/depend:
	cd /src/build_wasm_contrib && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /src /src/opencv_contrib/modules/img_hash /src/build_wasm_contrib /src/build_wasm_contrib/modules/img_hash /src/build_wasm_contrib/modules/img_hash/CMakeFiles/opencv_img_hash.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : modules/img_hash/CMakeFiles/opencv_img_hash.dir/depend
