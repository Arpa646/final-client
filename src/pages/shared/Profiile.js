import React from 'react';

const Profiile = () => {
    return (
        <div>
            <input type="checkbox" id="profile" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="profile" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">you are booking for</h3>
                  
                   
                </div>
            </div>
        </div>
    );
};

export default Profiile;