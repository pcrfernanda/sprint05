import React from 'react';

const Settings = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={
                {
                    fontSize: '2em'
                }
            }>Configuração</h1>
            <main>
                <div style={
                    {
                        display:'flex',
                        justifyContent:'center'
                    }
                }>
                    <p>Notificações:</p>
                    <input style={
                        {
                            marginTop:'2vh',
                            marginLeft:'2vh',
                            width: '3vh',
                            height: '3vh'
                        }
                    } type="checkbox" />
                </div>
                <div style={
                    {
                        display:'flex',
                        justifyContent:'center'
                    }
                }>
                    <p>Sincronização de Conta:</p>
                    <input style={
                        {
                            marginTop:'2vh',
                            marginLeft:'2vh',
                            width: '3vh',
                            height: '3vh'
                        }
                    } type="checkbox" />
                </div>
                <div style={
                    {
                        display:'flex',
                        justifyContent:'center'
                    }
                }>
                    <p>Aparência:</p>
                    <input style={
                        {
                            marginTop:'2vh',
                            marginLeft:'2vh',
                            width: '3vh',
                            height: '3vh'
                        }
                    } type="checkbox" />
                </div>
                <div style={
                    {
                        display:'flex',
                        justifyContent:'center'
                    }
                }>
                    <p>Permissões:</p>
                    <input style={
                        {
                            marginTop:'2vh',
                            marginLeft:'2vh',
                            width: '3vh',
                            height: '3vh'
                        }
                    } type="checkbox" />
                </div>
                <div style={
                    {
                        display:'flex',
                        justifyContent:'center'
                    }
                }>
                    <p>Sons:</p>
                    <input style={
                        {
                            marginTop:'2vh',
                            marginLeft:'2vh',
                            width: '3vh',
                            height: '3vh'
                        }
                    } type="checkbox" />
                </div>
            </main>
        </div>
    );
};

export default Settings;
