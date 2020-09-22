import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import coy from "react-syntax-highlighter/dist/esm/styles/prism/duotone-space";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { value } = this.props;
    return (
      <SyntaxHighlighter language="javascript" style={coy}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
