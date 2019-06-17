import axios from "axios";
import {createMessage, returnErrors} from "./messages";
import {tokenConfig} from "./auth";
import {GET_SURVEYS, DELETE_SURVEY, ADD_SURVEY, VIEW_SURVEY, UPDATE_SURVEY} from "./types";

// GET SURVEYS
export const getSurveys = () => (dispatch, getState) => {
    axios
        .get("/api/surveys/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SURVEYS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE SURVEY
export const deleteSurvey = id => (dispatch, getState) => {
    axios
        .delete(`/api/surveys/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteSurvey: "Survey Deleted"}));
            dispatch({
                type: DELETE_SURVEY,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD SURVEY
export const addSurvey = survey => (dispatch, getState) => {
    axios
        .post("/api/surveys/", survey, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({addSurvey: "Survey Added"}));
            dispatch({
                type: ADD_SURVEY,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// VIEW SURVEY
export const viewSurvey = id => (dispatch, getState) => {
    axios
        .get(`/api/surveys/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({viewSurvey: "Viewing SDAM"}));
            dispatch({
                type: VIEW_SURVEY,
                payload: res.data.survey
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// UPDATE SURVEY
export const updateSurvey = id=> (dispatch, setState) => {
    axios
        .put(`/api/surveys/${id}/`, tokenConfig(setState))
        .then(res => {
            dispatch(createMessage({updateSurvey: "Updating SDAM"}));
            dispatch({
                type: UPDATE_SURVEY,
                payload: res.data.survey
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
