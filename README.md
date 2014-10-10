# react-grid

Component for [React][1] to display a visual HTML gridsystem on top of Bootstrap 3. It is developed by [Inmeta Interaktiv][3]. Original name is Metagrid, and a demo is [here][2].

In action, press `g` to activate and toggle. Press `h` while holding `g` to make the grid sticky. 

![Metagrid image](https://photos-5.dropbox.com/t/1/AACYvNYQroNvjrBjP1WwtsjhJgTviYjiUdsRVQysFHaGIA/12/268623305/png/640x480/3/1412949600/0/2/metagrid.png/8iU80aV98DF6DGtojhxH3BepD_XrWHC-KnbxAUU95Nk)

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
