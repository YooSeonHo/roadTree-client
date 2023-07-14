'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/supabase';

// interface WrapProps {
//   WrapperComponent: React.ComponentProps<any> | React.ComponentType<any>;
// }

export const WithLogin = (WrapperComponent: React.ComponentProps<any>) => {
  //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!

  const HOC = (props: any) => {
    useEffect(() => {
      supabase.auth.getUser().then((res) => {
        if (!res.data.user) {
          supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
            },
          });
        }
      });
    }, []);
    return <WrapperComponent {...props} />;
  };
  return HOC;
};
