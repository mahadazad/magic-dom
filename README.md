Magic DOM
=========

Save your dom element counts using this plugin.

How to use:
===========

Wrap the html code which you want to save for dom count in a special comments &lt;!--//MGDOM [html] MGDOM//--&gt;

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
        $('.reducedoms').mgDom();
    &lt;/script&gt;
</pre>

Events Available:
=================
onDomChange <br />
beforeDomChange
