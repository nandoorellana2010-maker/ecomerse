'use client'
import CardProducto from '@/app/Components/CardProducto';
import { useContextProducto } from '@/app/Provider/ProviderProducto'
import React from 'react'

export default function Page() {

    const { producto, agregarCarrito } = useContextProducto();


    return (
        <div className='container'>
            <div className='row'>
                {
                        <div className='col-md-4'>
                            <CardProducto></CardProducto>
                            <br />

                        </div>
                }

            </div>


        </div>
    )
}

