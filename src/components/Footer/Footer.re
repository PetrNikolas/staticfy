[%bs.raw {|require('./Footer.css')|}];

let component = ReasonReact.statelessComponent("Footer");

let make = children => {
    ...component,
    render: _self =>
      <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column col-12 col-xs-12 text-center">
                    children
                </div>
            </div>
        </div>
      </footer>
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));
