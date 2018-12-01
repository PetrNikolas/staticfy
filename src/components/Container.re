let component = ReasonReact.statelessComponent("Container");

let make = children => {
    ...component,
    render: _self =>
      <div className="container"> children </div>
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));
