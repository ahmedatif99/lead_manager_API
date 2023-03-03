import React from "react";

const LeadsList = ({ leads, isLoading, deleteLead, dispatch }) => {
  return (
    <React.Fragment>
      {!isLoading &&
        leads.map((lead, idx) => (
          <tr key={idx}>
            <td>{lead.id}</td>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.message}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteLead(lead.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </React.Fragment>
  );
};

export default LeadsList;
