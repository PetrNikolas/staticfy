[%bs.raw {|require('./Section.css')|}];

let component = ReasonReact.statelessComponent("Section");

let make = children => {
    ...component,
    render: _self =>
      <section className="section"> children </section>
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));
