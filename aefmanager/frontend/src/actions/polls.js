import axios from "axios";
import {createMessage, returnErrors} from "./messages";
import {tokenConfig} from "./auth";
import {GET_POLLS, DELETE_POLL, ADD_POLL, VIEW_POLL, UPDATE_POLL} from "./types";

// GET POLLS
export const getPolls = () => (dispatch, getState) => {
    axios
        .get("/api/polls/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_POLLS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE POLL
export const deletePoll = id => (dispatch, getState) => {
    axios
        .delete(`/api/polls/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deletePoll: "Inner Compass Poll Deleted"}));
            dispatch({
                type: DELETE_POLL,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD POLL
export const addPoll = poll => (dispatch, getState) => {
    axios
        .post("/api/polls/", poll, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({addPoll: "Inner Compass Poll Added"}));
            dispatch({
                type: ADD_POLL,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// VIEW POLL
export const viewPoll = id => (dispatch, getState) => {
    axios
        .get(`/api/polls/${id}/`, tokenConfig(getState))
        .then(res => {
            const poll = res.data;
            dispatch(createMessage({viewPoll: "Viewing Inner Compass"}));
            dispatch({
                type: VIEW_POLL,
                payload: poll
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// UPDATE POLL
export const updatePoll = id => (dispatch, setState) => {
    axios
        .put(`/api/polls/${id}/`, tokenConfig(setState))
        .then(res => {
            dispatch(createMessage({updatePoll: "Updating Inner Compass"}));
            dispatch({
                type: UPDATE_POLL,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
