export interface TreeNode { key: string; title: import('vue').VNodeChild; children?: TreeNode[]; disabled?: boolean; disableCheckbox?: boolean; selectable?: boolean; checkable?: boolean; icon?: import('vue').VNodeChild; isLeaf?: boolean }
export interface TreeCheckInfo { checked: boolean; node: TreeNode; halfCheckedKeys: string[] }
export const descendants = (node: TreeNode): TreeNode[] => (node.children ?? []).flatMap(child => [child, ...descendants(child)]);
export function flattenTree(nodes: TreeNode[], depth = 0, parent?: string): { node: TreeNode; depth: number; parent?: string }[] { return nodes.flatMap(node => [{ node, depth, parent }, ...flattenTree(node.children ?? [], depth + 1, node.key)]); }
export function conduct(nodes: TreeNode[], raw: Set<string>) {
 const checked = new Set<string>(), half = new Set<string>();
 function visit(node: TreeNode, inherited: boolean): { all: boolean; some: boolean } { const own = inherited || raw.has(node.key); const children = (node.children ?? []).filter(child => !child.disabled && !child.disableCheckbox); if (!children.length) { if (own && !node.disabled && !node.disableCheckbox) checked.add(node.key); return { all: own, some: own }; } const results = children.map(child => visit(child, own)); const all = results.every(result => result.all), some = results.some(result => result.some); if (all) checked.add(node.key); else if (some) half.add(node.key); return { all, some }; }
 nodes.forEach(node => visit(node, false)); return { checked, half };
}
