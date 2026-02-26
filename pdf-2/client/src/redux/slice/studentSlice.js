import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios/axiosInstance';
import { endpoint_add_student, endpoint_all_student, endpoint_delete_student, endpoint_generate_pdf } from '../../api/apiUrl/apiUrl';

export const addStudentSlice = createAsyncThunk("studentSlice/addStudentSlice",
    async data => {
        // console.log("Receive student data in slice", data);

        const res = await axiosInstance.post(endpoint_add_student, data);
        // console.log('Response for adding student details in slice', res);

        if (res?.error) throw res?.error;

        return res?.data;
    }
)

export const allStudentSlice = createAsyncThunk("studentSlice/allStudentSlice",
    async () => {
        const res = await axiosInstance.get(endpoint_all_student);
        // console.log('Response for fetching all students in slice', res);

        if (res?.error) throw res?.error;

        return res?.data;
    }
)

export const deleteStudentSlice = createAsyncThunk("studentSlice/deleteStudentSlice",
    async (studentId) => {
        // console.log('Deleted student ID', studentId);

        const res = await axiosInstance.delete(endpoint_delete_student + '/' + studentId);
        // console.log('Response for deleting student in slice', res);

        if (res?.error) throw res?.error;

        return studentId;
    }
)

const initialState = {
    isStudentLoading: false,
    studentData: [],
    hasStudentError: null
}

export const studentSlice = createSlice({
    name: "studentSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addStudentSlice.pending, (state, action) => {
                state.isStudentLoading = true
            })
            .addCase(addStudentSlice.fulfilled, (state, action) => {
                state.isStudentLoading = false,
                    state.studentData = action.payload
            })
            .addCase(addStudentSlice.rejected, (state, action) => {
                state.isStudentLoading = false,
                    state.hasStudentError = action.payload.error.message
            })

            .addCase(allStudentSlice.pending, (state, action) => {
                state.isStudentLoading = true
            })
            .addCase(allStudentSlice.fulfilled, (state, action) => {
                state.isStudentLoading = false,
                    state.studentData = action.payload
            })
            .addCase(allStudentSlice.rejected, (state, action) => {
                state.isStudentLoading = false,
                    state.hasStudentError = action.payload.error.message
            })

            .addCase(deleteStudentSlice.pending, (state, action) => {
                state.isStudentLoading = true
            })
            .addCase(deleteStudentSlice.fulfilled, (state, action) => {
                state.isStudentLoading = false,
                    state.studentData = action.payload
            })
            .addCase(deleteStudentSlice.rejected, (state, action) => {
                state.isStudentLoading = false,
                    state.hasStudentError = action.payload.error.message
            })
    }
})

export default studentSlice.reducer;