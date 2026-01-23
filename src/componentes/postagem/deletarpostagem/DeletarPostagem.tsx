import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar, deletar } from "../../../services/Service";

function DeletarPostagem() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    async function findById(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
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
        navigate("/postagens");
    }

    async function deletarPostagem() {
        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Postagem apagada com sucesso");
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("O token expirou, favor logar novamente");
                handleLogout();
            } else {
                alert("Erro ao apagar a Postagem");
            }
        }
        retornar();
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar postagem</h1>
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar a postagem a seguir?
            </p>
            <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
                <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                        <img
                            src={postagem.usuario?.foto}
                            className="h-12 rounded-full"
                            alt={postagem.usuario?.nome}
                        />
                        <h3 className="text-lg font-bold text-center uppercase">
                            {postagem.usuario?.nome}
                        </h3>
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
                        <p>{postagem.texto}</p>
                        <p>Tema: {postagem.tema?.descricao}</p>
                        <p>
                            Data:{" "}
                            {new Intl.DateTimeFormat("pt-BR", {
                                dateStyle: "full",
                                timeStyle: "medium",
                            }).format(new Date(postagem.data))}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <button
                        className="text-white bg-red-400 hover:bg-red-700 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center"
                        onClick={deletarPostagem}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarPostagem;