import PropTypes from 'prop-types';

export const CFSListPropType = {
  cfsList: PropTypes.arrayOf(PropTypes.shape({
    addon: PropTypes.string,
    _id: PropTypes.string,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  })),
};

export const CFSPropType = {
  currentCFSInfo: PropTypes.shape({
    addon: PropTypes.string,
    _id: PropTypes.string,
    cfsType: PropTypes.string,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  }),
};

export const CFSLogPropType = {
  cfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.number,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
};

export const RoutingIdPropType = {
  routingId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
