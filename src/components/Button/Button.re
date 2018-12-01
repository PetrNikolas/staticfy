[%bs.raw {|require('./Button.css')|}];

let component = ReasonReact.statelessComponent("Button");

let make = children => {
    ...component,
    render: _self => <button className="btn btn-secondary"> children </button>
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));
