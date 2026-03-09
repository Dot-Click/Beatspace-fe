import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBeats, createBeat, deleteBeat, updateBeat } from '../store/actions/beatActions';

export const useBeatController = () => {
  const dispatch = useDispatch();
  const { beats, isLoading, isCreating, error } = useSelector((state) => state.beat);

  const fetchBeats = useCallback(() => {
    return dispatch(getBeats());
  }, [dispatch]);

  const addBeat = useCallback((formData) => {
    return dispatch(createBeat(formData));
  }, [dispatch]);

  const removeBeat = useCallback((id) => {
    return dispatch(deleteBeat(id));
  }, [dispatch]);

  const editBeat = useCallback((id, formData) => {
    return dispatch(updateBeat(id, formData));
  }, [dispatch]);

  return {
    beats,
    isLoading,
    isCreating,
    error,
    fetchBeats,
    addBeat,
    removeBeat,
    editBeat,
  };
};
