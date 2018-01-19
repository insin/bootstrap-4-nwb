import t from 'prop-types'
import React from 'react'
import Icon from 'react-fa'

export default class LoadingButton extends React.Component {
  static propTypes = {
    loading: t.bool,
    bsStyle: t.string,
    type: t.string,
  }

  static defaultProps = {
    bsStyle: 'primary',
    type: 'button',
  }

  render() {
    let {bsStyle, children, className, disabled, loading, ...props} = this.props
    let classes = `btn btn-${bsStyle}`
    if (className) {
      classes += ` ${className}`
    }
    disabled = disabled || loading
    return <button class={classes} disabled={disabled} {...props}>
      {loading && <Icon name="spinner" spin/>} {children}
    </button>
  }
}
