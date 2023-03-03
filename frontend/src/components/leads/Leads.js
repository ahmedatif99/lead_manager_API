import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLeads, deleteLead } from "../../store/Leads/utils";
import LeadsList from "./LeadsList";

const Leads = () => {
  const dispatch = useDispatch();
  const { leads, isLoading } = useSelector((state) => state.leads);

  useEffect(() => {
    const dispatchAction = setTimeout(() => {
      dispatch(getLeads());
    }, 500);
    return () => {
      clearTimeout(dispatchAction);
    };
  }, []);

  return (
    <React.Fragment>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <LeadsList
            leads={leads}
            isLoading={isLoading}
            deleteLead={deleteLead}
            dispatch={dispatch}
          />
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Leads;
