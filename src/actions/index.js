/**
 * Select project action
 * 
 * @param {Object} project 
 */
export const selectProject = (project) => {
    return {
        type: 'PROJECT_SELECTED',
        payload: project
    };
}