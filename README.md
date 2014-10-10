# react-grid

Component for [React][1] to display a visual HTML gridsystem on top of Bootstrap 3. It is developed by [Inmeta Interaktiv](http://www.inmeta.no/).

In action, press `g` to activate and toggle. Press `h` while holding `g` to make the grid sticky. 

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