import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function(){
    return(
        <div>
            <Fragment>
                <Leads />
                <Form />
            </Fragment>
        </div>
    )
}
