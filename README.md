Magic DOM
=========

Save your dom element counts using this plugin.

How to use:
===========

Wrap the html code which you want to save for dom count in a special comments<br /> &lt;!--//MGDOM [html] MGDOM//--&gt;

Example:

<pre>
    &lt;div class="reducedoms"&gt;
      &lt;!--//MGDOM
      ...
      &lt;div&gt;...&lt;/div&gt;
      &lt;div&gt;...&lt;/div&gt;
      &lt;div&gt;...&lt;/div&gt;
      &lt;div&gt;...&lt;/div&gt;
      &lt;div&gt;...&lt;/div&gt;
      &lt;div&gt;...&lt;/div&gt;
      ...
       MGDOM//--&gt;
    &lt;/div&gt;
</pre>

now call the mgDom plugin:

<pre>
    &lt;script&gt;
        $(window).load(function(){
            $('.reducedoms').mgDom();
        });
    &lt;/script&gt;
</pre>

Options Available:
=================
| Option        | type           | description  |
| ------------- |:-------------:| -----:|
| onDomChange      | function | called after dom has been injected |
| beforeDomChange      | function      |   called before dom injection |
  <br />

