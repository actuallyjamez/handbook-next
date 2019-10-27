import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    // @ts-ignore
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={duotoneLight}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
