'use client';

import Card from './Card';
import { SiRedux } from 'react-icons/si';

export default function Card6() {
    return (
        <Card
            order={6}
            logo={<SiRedux className="w-full h-full text-[#764ABC]" />}
            title="Redux"
            code={`// Redux Toolkit Slice
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;`}
            color="bg-gradient-to-br from-[#764ABC]/45 via-[#764ABC]/30 to-[#9B6BDF]/20"
            textColor="text-[#764ABC]"
        />
    );
}
