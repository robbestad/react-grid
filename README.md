# react-grid

Component for [React][1] to display a visual HTML gridsystem on top of Bootstrap 3. It is developed by [Inmeta Interaktiv][3]. Original name is Metagrid, and a demo is [here][2].

In action, press `g` to activate and toggle. Press `h` while holding `g` to make the grid sticky. 

![Imgur](http://i.imgur.com/C5dtakG.png)

> When activated, Metagrid will overlay a visual aid to help you place text correctly.

## Installation

    % npm install react-grid --save

## Usage

    var Metagrid = require('react-grid');

    MyComponent = React.createClass({
      render: function() {
         return (
          <Metagrid />
        );
      }
    });

[1]: https://facebook.github.io/react/
[2]: http://demo2.inmetainteraktiv.no/Metagrid/
[3]: http://www.inmeta.no/
