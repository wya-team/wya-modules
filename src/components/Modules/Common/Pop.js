import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
class Pop extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const { title, children, className, modules } = this.props;
		return (
			<div className={`wya-me-modules wya-mem-edit${className ? ` ${className}` : ''}`} >
				<div className="_flex _fd-c _pd-10 _mg-10" >
					<p className="_mg-0 _lh-24"> {title} </p>
					<div className="v-seme-pop">
						<span className="__arrow" />
						{children}
					</div>
				</div>
			</div>
		);
	}
}
Pop.propTypes = {
};
export default Pop;