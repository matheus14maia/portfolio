import React from 'react';

export default function Skills() {
    return(
        <section id='Skills'>
            <div className="bg-white py-24 sm:py-32">
                <div className='absolute my-auto w-screen font-normal leading-none'>
                    <div className='grid grid-cols-2 h-full mx-16 lg:ml-48'>
                        <div className='text-center'>
                            <span className='text-2xl'>Serviços</span>
                            <div className='grid grid-cols-1 mt-3 font-bold text-xl'>
                                <p className='text-center pb-5'>
                                    API <span className='font-normal'>/</span> Automação <span className='font-normal'>/</span> Código Semântico
                                </p>
                                <p className='text-center pb-5'>
                                    Criação de Relatórios <span className='font-normal'>/</span> Otimização de Serviços
                                </p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <span className='text-2xl'>Ferramentas</span>
                            <div className='grid grid-cols-1 mt-3 font-bold text-xl'>
                                <p className='text-center pb-5'>Python <span className='font-normal'>/</span> Delphi</p>
                                <p className='text-center pb-5'>JavaScript <span className='font-normal'>/</span> React</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-9xl leading-none text-center font-extrabold text-transparent bg-gray-200 bg-clip-text'>
                    HABILIDADES
                </div>
            </div>
        </section>
    );
}