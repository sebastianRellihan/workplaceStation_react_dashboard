import React from 'react';
import PropTypes from 'prop-types'

function Cards(props) {
  return (
    <>
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.value.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.value.color} text-uppercase mb-1`}> {props.value.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${props.value.icon} fa-2x text-gray-300`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

Cards.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        icon: PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
        color: PropTypes.string.isRequired
    })
}

Cards.defaultProps = {
    value: {
        name: 'Total products',
        value: 0,
        icon: 'fas fa-clipboard-list',
        color: 'primary'
    }
}

export default Cards;