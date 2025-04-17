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

interface Classe {
  id_classe: string;
  libelle: string;
}

export default function FilieresPage() {
  const [classes, setClasses] = useState<Classe[]>([]);
  const [newClasse, setNewClasse] = useState({
    id_classe: "",
    libelle: "",
  });
  const [editMode, setEditMode] = useState<string | null>(null);

  useEffect(() => {
    fetchClasses();
  }, []);

  async function fetchClasses() {
    try {
      const response = await fetch('/api/classes');
      if (!response.ok) throw new Error('Failed to fetch classes');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editMode !== null ? `/api/classes/${editMode}` : '/api/classes';
    const method = editMode !== null ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClasse),
      });

      if (!response.ok) throw new Error('Failed to save class');
      
      setNewClasse({ id_classe: "", libelle: "" });
      setEditMode(null);
      fetchClasses();
    } catch (error) {
      console.error('Error saving class:', error);
    }
  }

  async function handleDelete(id: string) {
    try {
      const response = await fetch(`/api/classes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete class');
      
      fetchClasses();
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  }

  function handleEdit(classe: Classe) {
    setEditMode(classe.id_classe);
    setNewClasse({
      id_classe: classe.id_classe,
      libelle: classe.libelle,
    });
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Gestion des Filières</h1>
          <Link href="/">
            <Button variant="outline">Retour</Button>
          </Link>
        </div>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <Input
                placeholder="Libellé de la filière"
                value={newClasse.libelle}
                onChange={(e) =>
                  setNewClasse({ ...newClasse, libelle: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {editMode !== null ? "Modifier" : "Ajouter"}
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Libellé</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((classe) => (
                <TableRow key={classe.id_classe}>
                  <TableCell>{classe.libelle}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(classe)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(classe.id_classe)}
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