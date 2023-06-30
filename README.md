# Build OpenCV.JS

Include
- [OpenCV 4.7.x (latest)](https://github.com/opencv/opencv/commit/131dab774c386217d323c00248b0276bd4033dda)
- [OpenCV Contrib (latest)](https://github.com/opencv/opencv_contrib/commit/f10c84d48b0714f2b408c9e5cccfac1277c8e6cc)

Following this tutorial: \
https://docs.opencv.org/4.7.0/d4/da1/tutorial_js_setup.html

```bash
# latest
git clone https://github.com/opencv/opencv.git opencv_latest && \
    cd opencv_latest && \
    git clone https://github.com/opencv/opencv_contrib.git

# specific tags (4.7.0)
git clone --depth 1 --branch 4.7.0 https://github.com/opencv/opencv.git opencv_47 && \
    cd opencv_47 && \
    git clone --depth 1 --branch 4.7.0 https://github.com/opencv/opencv_contrib.git
```

## Compile on Docker

```bash
docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk:2.0.10 emcmake python3 ./platforms/js/build_js.py build_wasm_contrib --build_wasm --build_loader --build_test --cmake_option="-DOPENCV_EXTRA_MODULES_PATH=/src/opencv_contrib/modules"

## Failed
--webnn: Web Neural Network, not compiled
--build_doc: need doxygen
```