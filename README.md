#AMD Multiple Depedency Plugin
This is a loader plugin for AMD systems such as [RequireJS](http://requirejs.org/) which allows multiple modules to be loaded with one argument as such:

    require(['md!firstModule;secondModule;text!./file.txt'], function (md) {
      // md is an array
      // md[0] is `firstModule`
      // md[1] is `secondModule`
      // md[2] is `text!./file.txt`
    });

You can also give modules aliases as such:

    require(['md!firstModule:first;secondModule:second;text!./file.txt:text'], function (md) {
      // md is an array
      // md[0] is md.first is `firstModule`
      // md[1] is md.second is `secondModule`
      // md[2] is md.text is `text!./file.txt`
    });

And you can of course mix aliased and non-aliased modules in one string.

##Why?

Because I felt like it.

##Doesn't this break builds?

Probably. In order to fix your build you will have to set up your build script to include modules which are only loaded through `md`.

##This is dumb.

Thank you.

##License
**The MIT License**

Copyright (c) 2013 Kenneth Powers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
