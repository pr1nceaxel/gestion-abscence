"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface Salle {
  id: number;
  code: string;
  capacite: number;
  disponible: boolean;
}

export default function SallesPage() {
  const [salles, setSalles] = useState<Salle[]>([]);
  const [newSalle, setNewSalle] = useState({
    code: "",
    capacite: "",
    disponible: true,
  });
  const [editMode, setEditMode] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchSalles();
  }, []);

  async function fetchSalles() {
    try {
      const response = await fetch('/api/salles');
      if (!response.ok) throw new Error('Failed to fetch salles');
      const data = await response.json();
      setSalles(data);
    } catch (error) {
      console.error('Error fetching salles:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editMode !== null ? `/api/salles/${editMode}` : '/api/salles';
    const method = editMode !== null ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: newSalle.code,
          capacite: parseInt(newSalle.capacite),
          disponible: newSalle.disponible,
        }),
      });
    
      const result = await response.json();
    
      if (!response.ok) {
        if (result.details?.includes("already exists")) {
          setErrorMessage("Ce code existe déjà !");
        } else {
          setErrorMessage("Erreur Ce code existe déjà.");
        }
        return;
      }
    
      setErrorMessage("");
      setNewSalle({ code: "", capacite: "", disponible: true });
      setEditMode(null);
      fetchSalles();
    } catch (error) {
      setErrorMessage("Erreur serveur.");
      console.error('Error saving salle:', error);
    }
  }    

  async function handleDelete(id: number) {
    try {
      const response = await fetch(`/api/salles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete salle');
      
      fetchSalles();
    } catch (error) {
      console.error('Error deleting salle:', error);
    }
  }

  function handleEdit(salle: Salle) {
    setEditMode(salle.id);
    setNewSalle({
      code: salle.code,
      capacite: salle.capacite.toString(),
      disponible: salle.disponible,
    });
  }


  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Gestion des Salles</h1>
          <Link href="/acceuil">
            <Button variant="outline">Retour</Button>
          </Link>
        </div>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Code de la salle"
                value={newSalle.code}
                onChange={(e) =>
                  setNewSalle({ ...newSalle, code: e.target.value })
                }
                required
              />
              <Input
                type="number"
                placeholder="Capacité"
                value={newSalle.capacite}
                onChange={(e) =>
                  setNewSalle({ ...newSalle, capacite: e.target.value })
                }
                required
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="disponible"
                  checked={newSalle.disponible}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, disponible: e.target.checked })
                  }
                  className="h-4 w-4"
                />
                <label htmlFor="disponible">Disponible</label>
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <Button type="submit" className="w-full">
              {editMode !== null ? "Modifier" : "Ajouter"}
            </Button>
          </form>
        </Card>
      {/* barre_de_recerce_ici */}

      <div className="mb-6">
        <Input
          placeholder="Rechercher par code, capacité ou disponibilité..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>


        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Capacité</TableHead>
                <TableHead>Disponibilité</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {salles.filter((salle) =>
                salle.code.toLowerCase().includes(search) ||
                salle.capacite.toString().includes(search) ||
                (salle.disponible ? "disponible" : "indisponible").includes(search)
              ).map((salle) => (
                <TableRow key={salle.id}>
                  <TableCell>{salle.code}</TableCell>
                  <TableCell>{salle.capacite}</TableCell>
                  <TableCell>
                    {salle.disponible ? "Disponible" : "indisponible"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(salle)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(salle.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}