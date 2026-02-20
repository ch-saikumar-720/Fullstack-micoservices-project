output "cluster_name" {
  value = aws_eks_cluster.eks.name
}

output "bastion_public_ip" {
  value = aws_instance.bastion.public_ip
}
