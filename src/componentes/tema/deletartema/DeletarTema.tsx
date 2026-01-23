import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";

function DeletarTema() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [tema, setTema] = useState<Tema>({} as Tema);

    async function findById(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    function retornar() {
        navigate("/temas");
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Tema apagado com sucesso");
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("O token expirou, favor logar novamente");
                handleLogout();
            } else {
                alert("Erro ao apagar o Tema");
            }
        }
        retornar();
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar tema</h1>
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
                    Tema
                </header>
                <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center"
                        onClick={deletarTema}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarTema;