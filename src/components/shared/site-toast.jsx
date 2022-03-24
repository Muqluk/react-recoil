import React from 'react';
import toast, { Toaster, ToastBar } from 'react-hot-toast';

import { BsX } from 'react-icons/bs';

const primary = '#3daf8d';
const red = '#9e0442';


const SiteToast = () => (
  <Toaster position="bottom-right"
    containerStyle={{ top: '90px' }}
    toastOptions={{
      duration: 2500,
      style: {
        borderRadius: '5px',
        borderLeft: `5px solid ${red}`,
        wordBreak: 'break-word',
        maxWidth: '600px',
      },
      success: {
        style: {
          borderLeftColor: primary,
        },
        iconTheme: {
          primary,
        },
      },
      error: {
        duration: Infinity,
        iconTheme: {
          primary,
        },
      },
    }}>
    {(t) => (<ToastBar toast={t}>
      {({ icon, message }) => (
        <>
          {icon}
          {message}
          {t.type !== 'loading' && (
            <button onClick={() => toast.dismiss(t.id)}>
              <BsX style={{ fontSize: '1.5em' }} />
            </button>
          )}
        </>
      )}
    </ToastBar>)}
  </Toaster>
);

export default SiteToast
