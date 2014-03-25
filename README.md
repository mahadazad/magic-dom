
Magic DOM
=========

Save your dom element counts using this plugin.

How to use:
===========

Wrap the html code which you want to save for dom count in a special comments &gt;!--//MGDOM [html] MGDOM//--&lt;

Example:

<code>
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
</code>

now call the mgDom plugin:

<code>
    &lt;script&gt;
        $('.reducedoms').mgDom();
    &lt;/script&gt;
</code>

Events Available:
=================
onDomChange
beforeDomChange